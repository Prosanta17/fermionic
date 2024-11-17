"use client";
import React, { useState } from "react";
import AdminLayout from "@/app/adminLayout/layout";
import AddBlogForm from "@/components/AddBlog/AddBlogForm";
import BlogList from "@/components/AddBlog/BlogList";

const BlogManage = () => {
  const [BlogForm, setBlogForm] = useState<boolean>(false);

  const handleBlogForm = () => {
    setBlogForm(!BlogForm);
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between gap-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">
          Blog
        </h2>
        <button
          onClick={handleBlogForm}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Add Blog
        </button>
      </div>
      {BlogForm ? (
        <AddBlogForm handleBlogForm={handleBlogForm} />
      ) : (
        <BlogList handleBlogForm={handleBlogForm} />
      )}
    </AdminLayout>
  );
};

export default BlogManage;
