import { BlockList } from 'net';

import { Forbidden } from '../utils/exceptions/forbidden.exception.mjs';

const blockList = new BlockList();
blockList.addSubnet('100.100.100.1', 28);

const checkAdminAndIp = (role, ip) => {
  if (role !== 'ADMIN' || ip !== '100.100.100.100') return false;
  return true;
};

const checkSuperAdminAndIp = (role, ip) => {
  if (!['ADMIN', 'SUPER_ADMIN'].includes(role) || !blockList.check(ip))
    return false;

  return true;
};

export const roleMiddleware = async (req, _, next) => {
  const validators = [
    checkAdminAndIp(req.user.role, req.ip),
    checkSuperAdminAndIp(req.user.role, req.ip),
  ];

  if (validators.some(Boolean)) return next();

  return next(new Forbidden());
};
