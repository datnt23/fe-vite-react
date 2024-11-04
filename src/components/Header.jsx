import { userActions } from "../redux/slices/user";
import { useDispatch, useSelector } from "../redux/store";
// ----------------------------------------------------------------------

export default function Header() {
  const { isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log(isLoading);
  return (
    <>
      <button onClick={() => dispatch(userActions.startLoading())}>get</button>
    </>
  );
}
