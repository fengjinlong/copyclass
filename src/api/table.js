
import fetch from '@/server/request'
// post
export const getList = (data) => fetch('/syspower', data, 'POST')
// get
export const getValiCode = () => fetch('/courseinfo/classUnitsTemplate/getClassUnitTemplateList')