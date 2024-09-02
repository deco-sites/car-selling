import { useSignal } from "@preact/signals";
import { JSX } from "preact/jsx-runtime";
import { Airtable } from "site/types/airtable.ts";
import { invoke } from "site/runtime.ts";

interface Props {
  airtable?: Airtable;
  successMessage?: string;
}

export default function LeadForm({ airtable, successMessage }: Props) {
  const loading = useSignal(false);
  const success = useSignal(false);

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      loading.value = true;

      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const vehicle = formData.get("vehicle") as string;

      await invoke["site"].actions.createAirtableRecord({
        airtable,
        email,
        name,
        vehicle,
      });

      success.value = true;
    } finally {
      loading.value = false;
    }
  };

  if (success.value) {
    return (
      <div
        role="alert"
        className="alert h-full bg-primary text-primary-content flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-bold text-base">{successMessage}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="form-control justify-start gap-2">
      <input
        required
        placeholder="Nome"
        class="input input-bordered"
        name="name"
      />
      <input
        placeholder="E-mail"
        type="email"
        class="input input-bordered"
        name="email"
        required
      />
      <input
        placeholder="Veículo"
        class="input input-bordered"
        name="vehicle"
        required
      />

      <button
        type="submit"
        disabled={loading.value}
        class="btn btn-primary no-animation"
      >
        <span class="inline">Avançar</span>
        {loading.value && <span class="loading loading-spinner loading-xs" />}
      </button>
    </form>
  );
}
