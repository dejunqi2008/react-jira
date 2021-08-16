

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {}, [param])

    return (
        <form>
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
                })}>
                    <option value={''}>POC</option>
                    {users.map(user => <option value={user.id}>{user.name}</option>)}
                </select>
            </div>
        </form>
    );
}
