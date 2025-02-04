'use client';

import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { verifyOTP } from "@/lib/actions";
import { useActionState } from "react";

export default function VerifyOTPPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [state, dispatch] = useActionState<any>(verifyOTP, {
        message: null,
        errors: {}
    });

    if (!email) {
        return <div>Invalid verification link</div>;
    }

    return (
        <form action={dispatch}>
            <input type="hidden" name="email" value={email} />
            <div>
                <label htmlFor="otp">Enter Verification Code</label>
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    required
                    maxLength={6}
                    pattern="\d{6}"
                />
                {state.errors.otp &&
                    <p className="text-red-500">{state.errors.otp}</p>
                }
            </div>
            {state.message &&
                <p className="text-red-500">{state.message}</p>
            }
            <button type="submit">Verify</button>
        </form>
    );
}