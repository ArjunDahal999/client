import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import FormFeild from '~/components/Form-Field'
import { Button } from '~/components/Button'
const SignIn = () =>
{
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    const [isSumbitting, setIsSubmitting] = useState(false)
    return (
        <SafeAreaView className=" bg-primary h-full">
            <ScrollView>
                <View className=' w-full min-h-[85vh]  px-4 my-6 justify-start  '>
                    <Text className=" text-white font-bold pb-5 text-xl">Login to Aora</Text>

                    <FormFeild
                        title="Email"
                        value={form.email}
                        handelChangeText={(e) => { setForm({ ...form, email: e }) }}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormFeild
                        title="Password"
                        value={form.password}
                        handelChangeText={(e) => { setForm({ ...form, password: e }) }}
                        otherStyles="mt-7"
                    />

                    <Button
                        title={"Login"}
                        onPress={() => { setIsSubmitting(true) }}
                        className="mt-10"
                        disabled={isSumbitting}
                    />

                    <View className="flex pt-10 flex-row justify-center gap-x-2 items-center">
                        <Text className=" text-lg text-center text-gray-100 font-pregular">
                            Don't Have an account ?
                        </Text>
                        <Link href={'/sign-up'} className=' text-secondary  -translate-y-1 text-lg'>Sign Up</Link>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

export default SignIn