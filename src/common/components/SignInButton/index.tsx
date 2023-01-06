import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Button } from './styles';

export function SignInButton() {
    const isUserLoggedIn = true;
    
    return isUserLoggedIn ? (
        <Button type="button">
            <FaGithub color='#04d361'/>
            Moises Junior
            <FiX color='#737380' style={{marginLeft: '1rem'}}/>
        </Button>
    ) : (
        <Button type="button">
            <FaGithub color='yellow' />
            Sign in with button
        </Button>
    );
}