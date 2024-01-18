import { Notify } from 'quasar'

export const serverNotifyHandler = (result: any, msg: string) => {
  if (result.code === 200) {
    Notify.create({
      type: 'positive',
      message: msg,
      position: 'top',
    })
  } else {
    Notify.create({
      color: 'negative',
      message: msg,
      icon: 'report_problem',
      position: 'top',
    })
  }
}

export default serverNotifyHandler
