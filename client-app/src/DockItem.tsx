import React from 'react';
import { Dock } from './demo';

interface Props {
    dock: Dock
};

export default function DockItem ({dock}:Props) {

    return (<div>
        <span>
          {dock.name}
        </span>
        <button onClick={() => dock.makeSound(dock.name + ' quack')}>Make Sound</button>
      </div>);
};