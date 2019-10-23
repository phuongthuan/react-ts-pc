import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.ul`
  padding: 0 20px;
`;

interface Props {

};

const SideBar: React.FC<Props> = () => (
  <Wrapper>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/search">User</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/react-memo">React-Memo</Link></li>
    <li><Link to="/react-use-callback">useCallback Hook</Link></li>
    <li><Link to="/react-use-memo">useMemo Hook</Link></li>
  </Wrapper>
)

export default SideBar;