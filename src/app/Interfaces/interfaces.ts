export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  isActivated?: boolean;
}
