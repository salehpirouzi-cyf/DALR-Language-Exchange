// import "../../assets/css/general.css";

// //🍉
// import { Card } from "antd";

// const { Meta } = Card;

// function UserList({ users }) {
// 	console.log(users.payload);
// 	return (
// 		<>
// 			{Array.isArray(users.payload) && users.payload.length > 0 ? (
// 				users.payload.map((user) => (
// 					<Card
// 						key={user.id}
// 						hoverable
// 						style={{
// 							width: 300,
// 							display: "inline-block",
// 							margin: "4em",
// 						}}
// 						cover={
// 							<img
// 								alt={`${user.first_name} ${user.last_name}`}
// 								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
// 							/>
// 						}
// 					>
// 						<Meta
// 							title={`${user.first_name} ${user.last_name}`}
// 							description={`Languages spoken: ${user.languages_speak.join(
// 								", "
// 							)}`}
// 						/>
// 						<Meta
// 							description={`Languages spoken: ${user.languages_interested.join(
// 								", "
// 							)}`}
// 						/>
// 					</Card>
// 				))
// 			) : (
// 				<div>No users found.</div>
// 			)}
// 		</>
// 	);
// }

// export default UserList;

// //🍉

// //API for contry https://restcountries.com/v3.1/name/iran
//🍉

import "../../assets/css/general.css";
import { Card } from "antd";

const { Meta } = Card;

function importAllImages(requiredImages) {
	const images = {};
	requiredImages.keys().map((item) => {
		images[item.replace("./", "")] = requiredImages(item);
	});
	return images;
}

const allImages = importAllImages(
	require.context(
		"../../../../server/public/images",
		false,
		/\.(png|jpe?g|svg)$/
	)
);

function UserList({ users }) {
	console.log(users.payload);
	return (
		<>
			{Array.isArray(users.payload) && users.payload.length > 0 ? (
				users.payload.map((user) => (
					<Card
						key={user.id}
						hoverable
						style={{
							width: 300,
							display: "inline-block",
							margin: "4em",
						}}
						cover={
							// <img
							// 	alt={`${user.first_name} ${user.last_name}`}
							// 	src={user.imageUrl}
							// />
							<img
								alt={`${user.first_name} ${user.last_name}`}
								src={allImages["image-1.jpg"]?.default}
							/>
							// <img src={allImages[user.imageUrl]?.default} alt="EXAMPLE" />
						}
					>
						<Meta
							title={`${user.first_name} ${user.last_name}`}
							description={`Languages spoken: ${user.languages_speak}, ${user.languages_speak}`}
						/>
						<Meta
							description={`Languages interested: ${user.languages_interested}, ${user.languages_interested}`}
						/>
					</Card>
				))
			) : (
				<div>No users found.</div>
			)}
		</>
	);
}

export default UserList;
