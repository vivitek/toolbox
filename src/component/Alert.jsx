import Swal from "sweetalert2"
import config from "../../vivi-tailwind-config.json"

const getColor = (type) => {
  switch (type) {
    case 'success': return config.colors.viviGreen.DEFAULT
    case 'info': return config.colors.viviBlue.DEFAULT
    case 'warning': return config.colors.viviYellOrange.DEFAULT
    case 'error': return config.colors.viviRed.DEFAULT
    case 'question': return config.colors.viviPinple.DEFAULT
    default: return undefined

  }
}

const alert = (props) => {
  const { type } = props

  return Swal.fire({
    ...props,
    title: type.replace(/^\w/, (c) => c.toUpperCase()),
    icon: type,
    iconColor: getColor(type),
    confirmButtonColor: getColor(type),
    confirmButtonText: "Confirmer"
  })
}

export default alert