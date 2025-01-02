import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";


interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId?: string;
}

export default function CommentSection({}: CommentSectionProps) {
  const [Comments, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComment([...Comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = Comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSavedEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = Comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, author: authorName }
          : comments
      );
      setComment(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId("");
    }
  };

  return (
    <div className="mt-8 ">
      <h2 className="text-2xl font-semibold">Comments</h2>

      <div className="mt-4 space-y-4 ">
        {Comments.length > 0 ? (
          Comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold ">
                  {" "}
                  {comment.author}
                  <p>{comment.text}</p>
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="mt-2 bg-black text-white hover:bg-black hover:text-white "
                  >
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400"> No comment yet</p>
        )}
      </div>
      <div className="mt-6 ">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2"
        />

        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2"
        />
        <Button
        onClick={editingCommentId ? handleSavedEditedComment : handleAddComment}
        className="mt-4  bg-black text-white hover:bg-black hover:text-white ">
          {editingCommentId ? 'Save' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}
