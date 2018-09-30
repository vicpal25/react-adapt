import React, { Component } from 'react';

export class SideNav extends Component {

  render() {
    return (
      <div>
        <ul class="side-nav" role="navigation" title="Link List">
            <li role="menuitem"><a href="#">Link 1</a></li>
            <li role="menuitem"><a href="#">Link 2</a></li>
            <li role="menuitem"><a href="#">Link 3</a></li>
            <li role="menuitem"><a href="#">Link 4</a></li>
        </ul>
      </div>
    )
  }
}

