export interface IUsuario {
  _id?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  isAdmin?: boolean;
  password?: string;
  isValidated?: {value: boolean, validatedDateTime: Date };
}

export class Usuario {

  public _id: string;
  public nombre: string;
  public apellido: string;
  public email: string;
  public password: string;
  public isAdmin: boolean;
  public isValidated: {value: boolean, validatedDateTime: Date };

  constructor() {  }

  public static createUser( usuario: IUsuario ): Usuario{

    const user = new Usuario();

    user._id = usuario._id || null;
    user.nombre = usuario.nombre || null;
    user.apellido = usuario.apellido || null;
    user.email = usuario.email || null;
    user.password = usuario.password || null;
    user.isAdmin = usuario.isAdmin || null;
    user.isValidated = usuario.isValidated || null;

    return user;
  }

}
