import Link from "next/link";

function Notifications({ Notificationid = 100 }) {
  return (
    <>
      <div className="bg-yellow-100 p-4 rounded-md shadow-md text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-gray-800 text-xl mb-4">Notifications</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/Notifications/1">Notification 1</Link>
          </li>
          <li>
            <Link href="/Notifications/2">Notification 2</Link>
          </li>
          <li>
            <Link href="/Notifications/3">Notification 3</Link>
          </li>
          <li>
            <Link href="/Notifications/4">Notification 4</Link>
          </li>
          <li>
            <Link href="/Notifications/5">Notification 5</Link>
          </li>
          <li>
            <Link href="/Notifications/6">Notification 6</Link>
          </li>
          <li>
            <Link href={`/Notifications/${Notificationid}`}>
              Notification {Notificationid}
            </Link>
          </li>
        </ul>
        <div className="absolute left-0 bottom-0 w-full border-t border-gray-400 mt-4"></div>
      </div>
    </>
  );
}

export default Notifications;
