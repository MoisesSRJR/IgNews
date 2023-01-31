import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Button } from './styles';
import { signIn, useSession, signOut } from 'next-auth/react'

export function SignInButton() {
    const { data: session } = useSession()
    
    return session ? (
        <Button type='button' onClick={() => signOut()}>
            <FaGithub color='#04d361'/>
            {session?.user?.name}
            <FiX color='#737380' style={{marginLeft: '1rem'}}/>
        </Button>
    ) : (
        <Button type='button' onClick={() => signIn('github')}>
            <FaGithub color='#eba417' />
            Sign in with button
        </Button>
    );
}