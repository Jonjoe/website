interface Theme {
  pallet: {
    [label: string]: string;
  }
}

const theme: Theme = {
  pallet: {
    WHITE: 'white',
    BLUE: '#4a95d4',
    BLACK: '#39373a',
    RED: '#e0795f',
    GREY: '#f8f8f8',
    LIGHT_GREY: '#949494'
  }
}

export default theme
