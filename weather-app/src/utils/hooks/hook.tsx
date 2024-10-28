import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/weatherStore';

// Creamos un hook personalizado para usar el dispatch tipado
export const useAppDispatch: () => AppDispatch = useDispatch;
