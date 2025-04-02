import { styled } from "..";

export const DrawerContent = styled('div', {
    width: 480,
    height: '100%',
    backgroundColor: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    color: '$white',
})

export const DrawerHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',

    h2: {
        fontSize: '$lg',
        fontWeight: 'bold',
    },

    button: {
        color: '$gray300',
    },
})

export const ProductList = styled('div', {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
})

export const ProductItem = styled('div', {
    display: 'flex',
    gap: '1rem',

    img: {
        borderRadius: 8,
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
})

export const ProductName = styled('strong', {
    fontSize: '$md',
})

export const ProductPrice = styled('span', {
    fontSize: '$md',
    color: '$gray300',
})

export const RemoveButton = styled('button', {
    background: 'transparent',
    border: 0,
    color: '$green300',
    fontSize: '0.875rem',
    cursor: 'pointer',
    marginTop: '0.5rem',

    '&:hover': {
        textDecoration: 'underline',
    },
})

export const DrawerFooter = styled('footer', {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    button: {
        backgroundColor: '$green500',
        color: '$white',
        fontWeight: 'bold',
        fontSize: '$md',
        padding: '1.25rem',
        border: 0,
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'background-color 0.2s',

        '&:hover': {
            backgroundColor: '$green300',
        },
    },
})

export const Summary = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '$md',

        strong: {
            fontSize: '$lg',
        },
    },
})
