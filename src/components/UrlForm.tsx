import React, { useState, useCallback, useEffect } from "react";
import { Modal, Button } from "antd";
import { useAppDispatch } from "../hooks";
import { isValidUrl } from "../utils";
import { addLink } from ".";

export const UrlForm: React.FC = (): JSX.Element => {
  const [longUrl, setLongUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsValid(isValidUrl(longUrl));
  }, [longUrl]);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLongUrl(e.target.value);
      isValid ? setError("") : setError("Please enter a valid URL.");
    },
    [isValid]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (isValid) {
        try {
          dispatch(addLink({ longUrl }));
          setLongUrl("");
          setIsModalOpen(false);
        } catch (error) {
          setError("URL already exists.");
        }
      } else {
        setError("Please enter a valid URL.");
      }
    },
    [dispatch, longUrl, isValid]
  );

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create link
      </Button>
      <Modal
        title="Create a new link"
        open={isModalOpen}
        onCancel={onCancel}
        footer={null}
        maskClosable={false}
      >
        <form className="space-y-4">
          <input
            type="url"
            value={longUrl}
            onChange={handleInputChange}
            placeholder="Enter URL to shorten"
            required
            className="border p-2 rounded w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="primary" onClick={handleSubmit} disabled={!isValid}>
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};
