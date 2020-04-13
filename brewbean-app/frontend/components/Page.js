import React, { Component } from 'react';
import styled, {ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
    orange: '#EC4E20',
    black: '#0C090D',
    grey: '#50514F',
    lightgrey: '#DADDD8',
    offWhite: '#F7F7F2',
    maxWidth: '1000px',
    boxshadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        /* Set base size as 10px so that rems are base 10*/
        font-size: 10px;

    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.black};
    }
`;

class Page extends Component {
    render() {
        return (
            
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>

            </ThemeProvider>
        );
    }
}



export default Page;