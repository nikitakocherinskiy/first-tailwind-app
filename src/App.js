import { useState } from 'react'
import styles from './App.module.scss'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.parent}>
			<h1 className={styles.heading}>Hello World!</h1>
			<div>
				<input
					type='text'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
					Login
				</button>
				{isOpen && <button className='animate-fade'>TEST</button>}
			</div>
		</div>
	)
}

export default App
