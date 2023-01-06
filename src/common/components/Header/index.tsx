import { SignInButton } from '../SignInButton';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="./images/logo.svg" alt="ig.news" />
                <nav>
                    <a className='active'>Home</a>
                    <a>Posts</a>
                </nav>
                
                <SignInButton />
            </HeaderContent>
        </HeaderContainer>
    );
}
