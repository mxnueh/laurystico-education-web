'use client';

import { useState, useRef, useCallback } from 'react';

type FileWithPreview = File & {
  preview?: string;
  id: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  errorMessage?: string;
};

export default function AdvancedFileUpload() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'application/pdf', 'text/plain', '.zip', '.rar'];
  const maxFileSize = 50 * 1024 * 1024; // 50MB

  const generateFileId = () => Math.random().toString(36).substr(2, 9);

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return 'El archivo excede el tamaño máximo de 50MB';
    }
    
    const isValidType = allowedTypes.some(type => 
      file.type === type || file.name.toLowerCase().endsWith(type)
    );
    
    if (!isValidType) {
      return 'Tipo de archivo no permitido';
    }
    
    return null;
  };

  const createFilePreview = (file: File): string | undefined => {
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    }
    return undefined;
  };

  const processFiles = useCallback((fileList: FileList) => {
    const newFiles: FileWithPreview[] = [];
    
    Array.from(fileList).forEach(file => {
      const error = validateFile(file);
      const fileWithPreview: FileWithPreview = Object.assign(file, {
        id: generateFileId(),
        preview: createFilePreview(file),
        progress: 0,
        status: error ? 'error' as const : 'pending' as const,
        errorMessage: error || undefined,
      });
      
      newFiles.push(fileWithPreview);
    });
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const { files: droppedFiles } = e.dataTransfer;
    if (droppedFiles.length > 0) {
      processFiles(droppedFiles);
    }
  }, [processFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles.length > 0) {
      processFiles(selectedFiles);
    }
  }, [processFiles]);

  const simulateUpload = async (file: FileWithPreview) => {
    setFiles(prev => prev.map(f => 
      f.id === file.id ? { ...f, status: 'uploading' } : f
    ));

    // Simular progreso de subida
    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, progress } : f
      ));
    }

    // Simular resultado final
    const success = Math.random() > 0.2; // 80% success rate
    setFiles(prev => prev.map(f => 
      f.id === file.id ? { 
        ...f, 
        status: success ? 'completed' : 'error',
        errorMessage: success ? undefined : 'Error al subir el archivo'
      } : f
    ));
  };

  const uploadFile = (file: FileWithPreview) => {
    if (file.status === 'error' && file.errorMessage) return;
    simulateUpload(file);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
  };

  const uploadAllPending = () => {
    files.filter(f => f.status === 'pending').forEach(uploadFile);
  };

  const clearCompleted = () => {
    setFiles(prev => {
      const completedFiles = prev.filter(f => f.status === 'completed');
      completedFiles.forEach(f => {
        if (f.preview) URL.revokeObjectURL(f.preview);
      });
      return prev.filter(f => f.status !== 'completed');
    });
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return '🖼️';
    if (file.type.startsWith('video/')) return '🎥';
    if (file.type === 'application/pdf') return '📄';
    if (file.name.endsWith('.zip') || file.name.endsWith('.rar')) return '📦';
    return '📁';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-blue-600';
      case 'uploading': return 'text-yellow-600';
      case 'completed': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const pendingCount = files.filter(f => f.status === 'pending').length;
  const completedCount = files.filter(f => f.status === 'completed').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Subir archivos
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comparte tus proyectos, tareas y creaciones. Sube imágenes, videos, códigos y documentos 
          de manera fácil y segura.
        </p>
      </div>

      {/* Upload Zone */}
      <div 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
          isDragOver 
            ? 'border-brand-primary bg-brand-primary/5 scale-105' 
            : 'border-gray-300 hover:border-brand-primary hover:bg-gray-50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".jpg,.jpeg,.png,.gif,.mp4,.pdf,.txt,.zip,.rar"
        />
        
        <div className="space-y-4">
          <div className="text-6xl">📁</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isDragOver ? '¡Suelta los archivos aquí!' : 'Arrastra archivos aquí'}
            </h3>
            <p className="text-gray-600 mb-4">
              o <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-brand-primary font-medium hover:underline"
              >
                explora tu dispositivo
              </button>
            </p>
          </div>
          
          {/* File Types Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🖼️</span>
              <span>Imágenes</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎥</span>
              <span>Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📄</span>
              <span>Documentos</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📦</span>
              <span>Archivos ZIP</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Tamaño máximo: 50MB por archivo
          </div>
        </div>
      </div>

      {/* Upload Actions */}
      {files.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-600">
            {files.length} archivo{files.length !== 1 ? 's' : ''} • 
            {pendingCount > 0 && ` ${pendingCount} pendiente${pendingCount !== 1 ? 's' : ''}`}
            {completedCount > 0 && ` • ${completedCount} completado${completedCount !== 1 ? 's' : ''}`}
          </div>
          
          <div className="flex gap-2">
            {pendingCount > 0 && (
              <button
                onClick={uploadAllPending}
                className="bg-brand-primary text-white px-4 py-2 rounded-action font-medium hover:bg-brand-hover transition-colors"
              >
                Subir todo ({pendingCount})
              </button>
            )}
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="bg-green-500 text-white px-4 py-2 rounded-action font-medium hover:bg-green-600 transition-colors"
              >
                Limpiar completados
              </button>
            )}
          </div>
        </div>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Archivos</h3>
          
          <div className="grid gap-4">
            {files.map((file, index) => (
              <div 
                key={file.id}
                className="bg-white rounded-xl shadow-soft border p-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* File Preview/Icon */}
                  <div className="flex-shrink-0">
                    {file.preview ? (
                      <img 
                        src={file.preview} 
                        alt={file.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-2xl">
                        {getFileIcon(file)}
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {file.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {formatFileSize(file.size)} • {file.type || 'Archivo'}
                        </p>
                        
                        {/* Status */}
                        <div className={`text-sm font-medium ${getStatusColor(file.status)}`}>
                          {file.status === 'pending' && 'Listo para subir'}
                          {file.status === 'uploading' && 'Subiendo...'}
                          {file.status === 'completed' && '✅ Subido exitosamente'}
                          {file.status === 'error' && `❌ ${file.errorMessage}`}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 ml-4">
                        {file.status === 'pending' && !file.errorMessage && (
                          <button
                            onClick={() => uploadFile(file)}
                            className="bg-brand-primary text-white px-3 py-1 rounded text-sm font-medium hover:bg-brand-hover transition-colors"
                          >
                            Subir
                          </button>
                        )}
                        {file.status === 'error' && !file.errorMessage && (
                          <button
                            onClick={() => uploadFile(file)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-yellow-600 transition-colors"
                          >
                            Reintentar
                          </button>
                        )}
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {file.status === 'uploading' && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progreso</span>
                          <span>{file.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h4 className="font-semibold text-blue-900 mb-3">Guías de uso</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h5 className="font-medium mb-2">Archivos permitidos:</h5>
            <ul className="space-y-1">
              <li>• Imágenes: JPG, PNG, GIF</li>
              <li>• Videos: MP4 (máx. 50MB)</li>
              <li>• Documentos: PDF, TXT</li>
              <li>• Comprimidos: ZIP, RAR</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Recomendaciones:</h5>
            <ul className="space-y-1">
              <li>• Usa nombres descriptivos</li>
              <li>• Organiza por proyecto/tema</li>
              <li>• Comprime archivos grandes</li>
              <li>• Verifica el contenido antes de subir</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}






