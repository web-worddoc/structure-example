import * as React from 'react';
import { toDataURL } from 'qrcode';


type Props = {
    value: string;
}

export const QRCode = ({ value, ...rest }: Props) => {
    let [uri, setUri] = React.useState<string>('');

    React.useEffect(() => {
        toDataURL(value).then(res => {
            setUri(res);
        });
    }, [value]);

    return (
        <img src={uri} {...rest}/>
    )
}
