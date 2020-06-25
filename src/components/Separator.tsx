import * as React from 'react';

export interface ISeparatorProps {
    height?:number
}

export default function Separator (props: ISeparatorProps) {
    const margin = props.height ? props.height : 20 + 'px'
  return (
    <div style={{marginTop:margin}} >
      
    </div>
  );
}
