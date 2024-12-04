import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
};
declare const Transition: {
    ({ children, classNames, animation, wrapper, ...restProps }: TransitionProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        unmountOnExit: boolean;
        appear: boolean;
    };
};
export default Transition;
