// Remember: Every custom component gets props.
// You ALWAYS get the children prop.
// We can add onSelect as a prop
export default function TabButton({ children, onSelect }) {
    // Value for the onClick prop is a function.
    // Do not add () — we don't want to execute the function straight up. It should be exeucted when the event occurs.
    // We want to set the value from the App component.
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}