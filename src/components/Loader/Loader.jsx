import {Oval} from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.style';

export const Loader = () => {
    return(
        <LoaderWrapper>
            <Oval
                 height={20}
                 width={20}
                 color="#404040"
                 wrapperStyle={{}}
                 wrapperClass=""
                 visible={true}
                 ariaLabel='oval-loading'
                 secondaryColor="#393939"
                 strokeWidth={2}
                 strokeWidthSecondary={2}
            />
        </LoaderWrapper>
    )
}