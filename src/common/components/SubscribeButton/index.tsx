import { Button } from './styles';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeNow({priceId} : SubscribeButtonProps) {  
    return  (
        <Button type="button">
            Subscribe now
        </Button>
    );
}