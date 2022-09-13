const ISize = {
    tablet: '768px',
  desktopXS: '992px',
}
export const IDevice = {
  desktopXS: `(min-width: ${ISize.desktopXS})`
}

const resolution = {
  ISize,
  IDevice
}

export default resolution;
