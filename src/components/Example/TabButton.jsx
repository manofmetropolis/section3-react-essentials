// Remember: Every custom component gets props.
// You ALWAYS get the children prop

export default function TabButton( {children} ) {
    return <li><button>{children}</button></li>
}