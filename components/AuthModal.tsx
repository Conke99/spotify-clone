"use client";

import { useRouter } from "next/navigation";
import {
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import Modal from "./Modal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      <Auth supabaseClient={supabaseClient} />
    </Modal>
  );
};

export default AuthModal;
