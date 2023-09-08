import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        home
                    </Link>
                    <Link to='/add-todo'>
                        add todo
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar