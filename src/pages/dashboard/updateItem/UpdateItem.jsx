import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, category, description, price, netWeight, _id } =
    useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  //   console.log(description);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
        netWeight: data.netWeight,
      };

      // data send to the database
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <SectionTitle
          heading="Update an Item"
          subHeading="Refresh Info"
        ></SectionTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Spices Name</span>
            </label>
            <select
              {...register("name", { required: true })}
              className="select select-bordered w-full"
              defaultValue={name}
            >
              <option disabled value="default">
                Select a Spices Name
              </option>
              <option value="Red Chili Powder">Red Chili Powder</option>
              <option value="Turmeric Powder">Turmeric Powder</option>
              <option value="Cumin Seeds">Cumin Seeds</option>
              <option value="Coriander Powder">Coriander Powder</option>
              <option value="Black Pepper">Black Pepper</option>
              <option value="Cloves">Cloves</option>
              <option value="Cinnamon">Cinnamon</option>
              <option value="Fenugreek Seeds">Fenugreek Seeds</option>
              <option value="Garam Masala">Garam Masala</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Spices Description</span>
            </label>

            <input
              type="text"
              placeholder="Type here"
              {...register("description", { required: true })}
              className="input input-bordered w-full"
              defaultValue={description}
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue={category}
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="Raw spices">Raw spices</option>
                <option value="Spices Powder">Spices Powder</option>
                <option value="Dried whole spices">Dried whole spices</option>
              </select>
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>

              <input
                type="text"
                placeholder="Type here"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                defaultValue={price}
              />
            </div>
          </div>
          {/* <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Recipe Details</span>
                </label>
      
                <textarea
                  {...register("recipe")}
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Bio"
                ></textarea>
              </div> */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Net Weight</span>
            </label>

            <input
              type="text"
              placeholder="Type here"
              {...register("netWeight", { required: true })}
              className="input input-bordered w-full"
              defaultValue={netWeight}
            />
          </div>
          <div>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>

          <button className="btn mt-3">
            Update Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
