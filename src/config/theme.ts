interface Theme {
  pallet: {
    [label: string]: string;
  }
}

const theme: Theme = {
  pallet: {
    WHITE: 'white',
    BLUE: '#4a95d4',
    GREEN: '#1abc9c',
    BLACK: '#39373a',
    RED: '#e0795f',
    LIGHT_GREY: '#f8f8f8',
    GREY: '#949494'
  }
}

export default theme
