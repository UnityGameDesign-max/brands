export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'localhost',
        uiBase: '/',
        apiHost: 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws',
        apiBase: '',
    },

    Prod: {
        name: 'Production',
        uiHost: '',
        uiBase: '/',
        apiHost: 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws',
    }
};

const currentHost = 
  !!window
  && !!window.location
  && typeof window.location.hostname === 'string'
  && window.location.hostname.toLowerCase();

let Environment;

switch(currentHost) {
    case Environments.Local.uiHost:
        Environment = Environments.Local;
        break;
    case Environments.Prod.uiHost:
        default:
            Environment = Environments.Prod;
            break;
};

export default Environment;