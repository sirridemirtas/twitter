import React from 'react';
import Button from '../components/button';
import NavButton from '../components/nav-button';
import Navigation from '../components/navigation';
import TextTitle from '../components/text-title';
import {Messages} from '../components/icons'
import ThemeButton from '../components/theme-button'

export default {
  title: 'Buttons'
}

export const Normal = () => (<Button>Button Story</Button>)
export const NavigationButton = () => <NavButton>
    <Messages/>
    <TextTitle>Messages</TextTitle>
  </NavButton> 
export const NavigationMenu = () => <Navigation  selectedKey="home"/>
export const TextTitleStory = () => <TextTitle>TextTitle</TextTitle>
export const ThemeButtonStory = () => <div>
  <ThemeButton>Theme Button</ThemeButton><br/>
  <ThemeButton full>Theme Button Full</ThemeButton><br/>
  <ThemeButton big>Theme Button Big</ThemeButton>
</div>