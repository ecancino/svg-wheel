import ky from 'ky';

const BIN_ID = '5c78481544e81057efdb694e';
const BIN_VERSION = 'latest';

const BIN_ID = '5c78481544e81057efdb694e';
const BIN_VERSION = 'latest';
const JSON_BIN = `https://api.jsonbin.io/b/${BIN_ID}/${BIN_VERSION}`;
const secretKey = '$2a$10$VO8CrFCmMSbXY97S.OZBROF0oUK5JzMOqsLsYhNrQx1CA3CxyYgoW';

export const api = ky.create({ prefixUrl: JSON_BIN });

export const getVirtues = () => api.get('', { secretKey }).json()