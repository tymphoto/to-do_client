import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

function MyButton({ children, ...props }) {
  const dispatch = useDispatch();
  return (
    <div className="buttons mb-3">
      <Button type="button" variant="outline-primary" onClick={() => dispatch(props.func)}>{children}</Button>
    </div>
  );
}

export default MyButton;
