import { initForm } from '@formspree/ajax/dist/index.mjs'

initForm({
  formElement: '#booking-form',
  formId: 'xppwprlj',
  useDefaultStyles: false,
  onSuccess: () => {
    window.location.assign('/?booking=sent')
  },
})
