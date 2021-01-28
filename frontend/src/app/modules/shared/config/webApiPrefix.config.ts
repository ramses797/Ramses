import { environment } from 'src/environments/environment';
import { WebApiPrefix } from 'src/app/modules/shared/models/webApiPrefix';
import { LogType } from 'src/app/modules/shared/enums/logType';

const webApiPrefix: WebApiPrefix = {
    inicio: LogType.INICIO,
    proyectos: LogType.PROYECTOS,
    sobreMi: LogType.SOBREMI,
    contacto: LogType.CONTACTO
}

const webApiBaseURL = environment.API_URL;

export const BASEURL = webApiBaseURL;
export const PREFIX = webApiPrefix;