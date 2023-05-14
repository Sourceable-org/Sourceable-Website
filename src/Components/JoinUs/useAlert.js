import { useContext } from 'react';
import AlertContext from './AuthContext';

const useAlert = () => useContext(AlertContext);

export default useAlert;