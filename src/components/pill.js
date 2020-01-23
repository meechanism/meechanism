import styled from 'styled-components';
import Colors from './colors';

import { getTextColorByBg } from '../utils/colors';

export const Pill = styled.span`
    color: ${props => props.background ? getTextColorByBg(props.background) : Colors.black};
    display: inline-block;
    border-radius: 2px;
    background: ${props => props.background ? props.background : Colors.secondary};
    margin: 0 0.25rem 0.25rem;
    padding: 0.20rem 0.5rem;
    font-family: sans-serif;
`;

export const PillBox = styled.div`
    margin: 0 0 1rem;
`;