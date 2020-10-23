import React from 'react';
import Button from '../components/button';
import NavButton from '../components/nav-button';
import Navigation from '../components/navigation';
import TitleBold from '../components/title-bold';
import {Messages} from '../components/icons'

export default {
  title: 'Buttons'
}

export const Normal = () => (<Button>Button Story</Button>)
export const NavigationButton = () =>
<NavButton>
  <Messages/>
  <TitleBold>Messages</TitleBold>
</NavButton>
export const NavigationMenu = () => <Navigation  selectedKey="home"/>
export const TitleBoldStory = () => <TitleBold>TitleBold</TitleBold>