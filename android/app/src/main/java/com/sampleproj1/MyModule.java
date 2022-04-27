package com.sampleproj1; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Promise;

public class MyModule extends ReactContextBaseJavaModule {
    MyModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "MyModule";
    }
    @ReactMethod
    public void MyEvent(String name, String location, Promise promise) {
        Log.d("MyModule", "Create event called with name: " + name + " and location: " + location);
        promise.resolve(name);
        promise.resolve(location);
    }
}
