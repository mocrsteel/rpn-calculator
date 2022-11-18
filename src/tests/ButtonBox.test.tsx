import ButtonBox, {Button, ButtonRow} from '../components/ButtonBox'
import { render, screen } from '@testing-library/react'


describe('Button', () => {
  it('renders button element', () => {
    render(<Button id={'5'}/>)
    const button = screen.getByRole('button')

    expect(button).toBeTruthy()
  })

  it('renders the correct inner text', () => {
    render(<Button id={'5'}/>)
    const button = screen.getByRole('button')

    expect(button.innerHTML).toBe('5')
  })
})

describe('ButtonRow', () => {
  const keys = ['5', '9', '+']
  it.each(keys)('renders Button %s', (key) => {
    render(<ButtonRow row={keys} />)
    const button = screen.getByText(key)
    
    expect(button).toBeTruthy()
  })

  it('renders the correct amount of buttons', () => {
    render(<ButtonRow row={keys} />)
    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toBe(keys.length)
  })

  it('renders a div with className btnRow', () => {
    const {container} = render(<ButtonRow row={keys} />)
    expect(container.getElementsByClassName('btnRow').length).toBe(1)

  })
})

describe('ButtonBox', () => {
  const keys = [
    ['ENTER', '±', 'E', 'CLR'],
    ['1', '2', '3', '÷'],
    ['4', '5', '6', 'x'],
    ['7', '8', '9', '+'],
    ['R↓', '.', '0', '-']
  ]
  it('renders a div with className btnBox', () => {
    const {container} = render(<ButtonBox keys={keys} />)

    expect(container.getElementsByClassName('btnBox').length).toBe(1)
  })

  it('renders the correct amount of btnRow\'s', () => {
    const {container} = render(<ButtonBox keys={keys} />)
    const btnRows = container.getElementsByClassName('btnRow')

    expect(btnRows.length).toBe(keys.length)
  })

  const allKeys = keys.flat()
  it.each(allKeys)('renders key %s', (key) => {
    render(<ButtonBox keys={keys} />)
    const btn = screen.getByText(key)
    expect(btn).toBeTruthy()
  })
})