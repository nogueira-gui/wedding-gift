import Image from 'next/image';
import CartIcon from './cart-icon.svg';
export default function Header({ user }: any) {
    return (
        <header className="header">
            <div className="left">
                <div className="avatar">
                    <Image src={user.photoURL} alt="User Avatar" width={50} height={50} />
                </div>
                <div className="name hidden-mobile">{user.displayName}</div>
            </div>
            <div className="center">
                <h1>Lista de Presentes</h1>
            </div>
            <div className="right">
                <button className="details-button hidden-mobile">Ver Carrinho</button>
                <svg
                    className="details-icon visible-mobile hidden-desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M2 5V4c0-1.1.9-2 2-2h16a2 2 0 012 2v1M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7M6 7h12M9 3v4M15 3v4" />
                </svg>
            </div>
            <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #f5f5f5;
        }

        .left {
          display: flex;
          align-items: center;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .name {
          font-weight: bold;
        }

        .center {
          flex: 1;
          text-align: center;
        }

        .right {
          display: flex;
          align-items: center;
        }

        .details-button {
          background-color: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.2s ease-in-out;
        }

        .details-button:hover {
          background-color: #0062cc;
        }

        .details-icon {
          width: 24px;
          height: 24px;
          color: #0070f3;
          cursor: pointer;
        }

        .hidden-desktop {
          display: none;
        }

        @media (max-width: 640px) {
          .name {
            display: none;
          }

          .hidden-mobile {
            display: none;
          }

          .visible-mobile {
            display: block;
          }

          .icon {
            display: block;
          }
        }

        @media screen and (max-width: 600px) {
          .details-button {
            display: none;
          }
          .icon {
            display: block;
          }
        }

        @media screen and (min-width: 640px) {
          .details-button {
            display: block;
          }
          .icon {
            display: none;
          }
        }
      `}</style>
        </header>
    );
}
