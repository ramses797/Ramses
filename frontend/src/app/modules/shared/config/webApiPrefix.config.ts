import { environment } from 'src/environments/environment';
import { WebApiPrefix } from 'src/app/modules/shared/models/webApiPrefix';
import { LogType } from 'src/app/modules/shared/enums/logType';

const webApiPrefix: WebApiPrefix = {
    inicio: LogType.INICIO,
    proyectos: LogType.PROYECTOS,
    estudios: LogType.ESTUDIOS,
    trabajos: LogType.TRABAJOS,
    cursos: LogType.CURSOS,
    contacto: LogType.CONTACTO,
    usuarios: LogType.USUARIOS
}

const webApiBaseURL = environment.API_URL;

export const BASEURL = webApiBaseURL;
export const PREFIX = webApiPrefix;